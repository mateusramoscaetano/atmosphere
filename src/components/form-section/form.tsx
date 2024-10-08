import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../form-field/form";
import { DefaultField } from "../form-field/default-field";
import { ContactCard } from "../cards/contact-card";
import formatPhone from "@/utils/formatPhone";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Spinner } from "../ui/spinner";

export interface ContactSchema {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IFormProps {}

export function ContactForm({}: IFormProps) {
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
    <div className="absolute max-h-[969px] text-white lg:left-[106px] lg:top-[16px] lg:w-[460px] xl:left-[135px] xl:top-[77px] xl:w-[580px] 2xl:left-[160px] 2xl:top-[95px] 2xl:w-[717px] 3xl:left-[200px] 3xl:top-[114px] 3xl:w-[860px]">
      <div className="font-superline lg:mb-3 lg:h-[45px] lg:text-[43px] xl:mb-3 xl:h-[56px] xl:text-[53px] 2xl:mb-4 2xl:h-[68px] 2xl:text-[63px] 3xl:mb-5 3xl:h-[85px] 3xl:text-[80px]">
        Fale Com a Gente
      </div>
      <div className="lg:mb-3 lg:text-[9px] xl:mb-3 xl:text-[12px] 2xl:mb-4 2xl:text-[14px] 3xl:mb-5 3xl:text-[18px]">
        Prencha o formulário abaixo ou entre em contato via WhatsApp
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p">
          <DefaultField
            placeholder="Nome"
            label="Nome"
            name="name"
            form={form}
            className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[24px]"
            isError={!!form.formState.errors.name}
            size="slim"
          />
          <DefaultField
            placeholder="Email"
            label="Email"
            name="email"
            form={form}
            className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[24px]"
            isError={!!form.formState.errors.email}
            size="slim"
          />
          <DefaultField
            placeholder="Telefone"
            label="Telefone"
            name="phone"
            form={form}
            className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[24px]"
            isError={!!form.formState.errors.phone}
            size="slim"
            onInput={handlePhoneInput}
          />
          <DefaultField
            placeholder="Mensagem"
            label="Mensagem"
            name="message"
            form={form}
            className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[20px] 3xl:mb-[24px]"
            isError={!!form.formState.errors.message}
            size="large"
          />
          <div className="flex items-center justify-end gap-2">
            <motion.button
              className={cn(
                "right-0 h-[40px] w-[120px] bg-[#0F4AE4] px-2 text-white",
                { "cursor-not-allowed": message === "Enviado" },
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
                className="text-sm"
              >
                enviar novamente
              </button>
            )}
          </div>
        </form>
      </Form>

      <div className="flex">
        <a href="https://wa.me/+5541998500132" target="_blank">
          <ContactCard
            src="/whats.png"
            width={43}
            height={42}
            text="41 9 9850-0132"
            className="absolute lg:w-[22px] xl:w-[28px] 2xl:w-[34px] 3xl:w-[43px]"
          />
        </a>
        <a href="mailto:contato@grupoatmosfera.com.br" target="_blank">
          <ContactCard
            src="/mail.png"
            width={44}
            height={33}
            text="contato@grupoatmosfera.com.br"
            className="lg:w-[22px] xl:w-[28px] 2xl:w-[34px] 3xl:w-[44px]"
          />
        </a>
      </div>
    </div>
  );
}
