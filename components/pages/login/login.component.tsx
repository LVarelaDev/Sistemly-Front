"use client";
import InputPassword from "@/components/ui/Inputs/InputPassword";
import InputText from "@/components/ui/Inputs/InputText";
import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginComponent = () => {
  const form = useForm();
  const { handleSubmit } = form;
  const router = useRouter();
  
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmitLogin = async (data: any) => {
    toast.promise(
      signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      }),
      {
        loading: "Intentando acceder...",
        error: "El correo o la contraseña son incorrectos",
        success(response) {
          console.log(response);
          router.push("/");
          return "Bienvenido a Sistemly!";
        },
      }
    );
  };

  return (
    <form
      className="flex flex-col gap-6 p-6 rounded-xl border shadow-small bg-white w-[20%]"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <h1 className="text-primary text-center font-bold text-xl">Sistemly</h1>
      <div className="flex flex-col gap-5">
        <InputText
          form={form}
          name="email"
          type="email"
          label="Correo"
          placeholder="Ingresa tu correo electronico"
        />
        <InputPassword form={form} name="password" />
      </div>
      <div className="flex flex-col gap-3">
        <Button type="submit" color="primary">
          Ingresar
        </Button>
        <Link
          href="/register"
          className="text-center bg-default-300 text-sm rounded-xl p-2"
        >
          Registrar empresa
        </Link>
      </div>
    </form>
  );
};

export default LoginComponent;
