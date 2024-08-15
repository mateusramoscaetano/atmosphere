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

interface IContactFormMobileProps {}

export function ContactFormMobile({}: IContactFormMobileProps) {
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
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        message: `Email:${values.message}`,
        Nome: values.name,
        Telefone: values.phone,
      }),
    });
  };

  function handlePhoneInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    event.target.value = formatPhone(value);
  }

  return (
    <>
      <div className="absolute mt-[9.6%] flex flex-col items-center justify-center px-4 text-white">
        <div className="mb-4 flex w-full items-start justify-start font-superline text-[30px]">
          Fale Com a Gente
        </div>
        <div className="mb-6 flex w-full items-start justify-start text-sm">
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
              size="large"
            />
            <motion.button
              className={cn(
                "mb-10 h-[40px] w-[120px] bg-[#0F4AE4] px-2 text-white",
              )}
              whileHover={{
                scale: 1.2,
              }}
              transition={{ duration: 0.3 }}
              type="submit"
            >
              Enviar
            </motion.button>
          </form>
        </Form>

        <div className="flex items-center justify-center gap-5">
          <a href="https://wa.me/+5541984486841">
            <ContactCardMobile
              src="/whats.svg"
              width={18}
              height={18}
              text="41 9 8448-6841"
              className="w-full flex-col"
            />
          </a>
          <a href="mailto:contato@grupoatmosfera.com.br">
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
