"use client";
import { ContactCard } from "@/components/cards/contact-card";
import { DefaultField } from "@/components/form-field/default-field";
import { Form } from "@/components/form-field/form";
import formatPhone from "@/utils/formatPhone";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactCardMobile } from "../cards/contact-card-mobile";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { ReactNode, useState } from "react";

interface IContactFormMobileProps {}

export function ContactFormMobile({}: IContactFormMobileProps) {
  const [message, setMessage] = useState<ReactNode>("Enviar");
  const createContact = z.object({
    name: z.string({ required_error: "Campo obrigatório" }),
    email: z.string({ required_error: "Campo obrigatório" }),
    phone: z.string({ required_error: "Campo obrigatório" }),
    message: z.string({ required_error: "Campo obrigatório" }),
  });

  const form = useForm<z.infer<typeof createContact>>({
    resolver: zodResolver(createContact),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof createContact>) => {
    try {
      setMessage(<Spinner />);

      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          message: `Email:${values.message}`,
          Nome: values.name,
          Telefone: values.phone,
        }),
      });

      setMessage("Enviado");
    } catch (error) {
      setMessage("Erro");
    }
  };

  function handlePhoneInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    event.target.value = formatPhone(value);
  }

  return (
    <>
      <div className="absolute mt-[9.6%] flex w-full flex-col items-center px-4 text-white">
        <div className="mb-4 flex w-full items-start font-superline text-[30px] 3sm:justify-start 2sm:justify-center">
          Fale Com a Gente
        </div>
        <div className="mb-6 flex w-full items-start text-sm 3sm:justify-start 2sm:justify-center">
          Prencha o formulário abaixo ou entre em contato <br /> via WhatsApp
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DefaultField
              placeholder="Nome"
              label="Nome"
              name="name"
              form={form}
              className=""
              isError={!!form.formState.errors.name}
              size="mobile"
            />
            <DefaultField
              placeholder="Email"
              label="Email"
              name="email"
              form={form}
              className=""
              isError={!!form.formState.errors.email}
              size="mobile"
            />
            <DefaultField
              placeholder="Telefone"
              label="Telefone"
              name="phone"
              form={form}
              className=""
              isError={!!form.formState.errors.phone}
              size="mobile"
              onInput={handlePhoneInput}
            />
            <DefaultField
              placeholder="Mensagem"
              label="Mensagem"
              name="message"
              form={form}
              className="mb-[15px]"
              isError={!!form.formState.errors.message}
              size="mobile"
            />
            <div className="flex items-center gap-2">
              <motion.button
                className={cn(
                  "mb-10 h-[40px] w-[120px] bg-[#0F4AE4] px-2 text-white",
                )}
                whileHover={message !== "Enviado" ? { scale: 1.1 } : {}}
                transition={{ duration: 0.3 }}
                type="submit"
                disabled={message === "Enviado"}
              >
                {message}
              </motion.button>
              {message === "Enviado" && (
                <button
                  type="button"
                  onClick={() => {
                    form.reset();
                    setMessage("Enviar");
                  }}
                  className="mb-10 text-sm"
                >
                  enviar novamente
                </button>
              )}
            </div>
          </form>
        </Form>

        <div className="flex items-center justify-center gap-5">
          <a href="https://wa.me/+5541998500132" target="_blank">
            <ContactCardMobile
              src="/whats.svg"
              width={18}
              height={18}
              text="41 9 9850-0132"
              className="w-full flex-col"
            />
          </a>
          <a href="mailto:contato@grupoatmosfera.com.br" target="_blank">
            <ContactCardMobile
              src="/mail9.svg"
              width={19}
              height={14}
              text="contato@grupoatmosfera.com.br"
              className="w-full flex-col"
            />
          </a>
        </div>
      </div>
    </>
  );
}
