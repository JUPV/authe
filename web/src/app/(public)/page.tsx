'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { Toast } from '@/components/Toast'
import InputLoginForm from '@/components/InputLoginForm'
import Link from 'next/link'

import Image from 'next/image'
import icon from '@/assets/icon.png'
import img from '@/assets/images/img.png'
import CircleValidation from '@/assets/CircleValidation'

interface AlertaProps {
  tipo: 'sucesso' | 'erro'
  mensagem: string
}

// document.cookie = authToken=${response.data.token}; max-age=${7 * 24 * 60 * 60}; path=/;

export default function Home() {
  const [alerta, setAlerta] = useState<AlertaProps | null>(null)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [emailerr, setEmailerr] = useState('')
  const [senhaerr, setSenhaerr] = useState('')
  const [verificando, setVerificando] = useState(false)
  const router = useRouter()

  async function handleLogin() {
    setVerificando(true);

    try {
      const response = await api.post('/sessions', {
        email: 'Gutemberg3@gmail.com', 
        password: '123456',
      });
      

  

    exibirAlerta({
      tipo: 'sucesso',
      mensagem: 'Sucesso!',
    });


      exibirAlerta({
        tipo: 'sucesso',
        mensagem: 'Sucesso!',
      });

      console.log('Token:', response.data.token);
    } catch (error) {
      console.log(error);
      exibirAlerta({
        tipo: 'erro',
        mensagem: 'Erro ao obter token.',
      });
    } finally {
      setVerificando(false);
    }
  }

  const exibirAlerta = (novoAlerta: AlertaProps) => {
    setAlerta(novoAlerta)
  }

  const fecharAlerta = () => {
    setAlerta(null)
  }

  return (
    <div className="flex h-screen flex-col bg-gray-950 md:flex-row">
      <div className="flex items-center justify-center md:w-1/2">
        <div className="inline-flex flex-col items-start gap-7">
          <div className="mb-10 ml-1 flex">
            <Image src={icon} alt="logo" width={100} height={100} />
          </div>
          <div className="text-4xl font-bold text-white">
            Innovate Code Group
          </div>
          <div className="w-80 text-base font-normal text-slate-600">
            Bem-vindo(a) ao nosso sistema de gestão de rádios.
          </div>
          <div className="flex flex-col gap-4">
            <InputLoginForm
              label="E-mail"
              type="email"
              placeholder="Digite seu endereço de e-mail"
              value={email}
              onChange={setEmail}
              error={emailerr}
            />
            <div className="flex flex-col">
              <div className="flex justify-end">
                <Link
                  href="/#"
                  className="absolute text-sm font-semibold text-violet-600 hover:cursor-pointer hover:underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>

              <InputLoginForm
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={setSenha}
                error={senhaerr}
              />
            </div>
          </div>

          <div
            className={`mt-6 inline-flex w-96 cursor-pointer items-center justify-center gap-2.5 rounded bg-violet-600 px-6 py-4 duration-150 hover:bg-violet-900 hover:ease-in`}
            onClick={handleLogin}
          >
            {verificando ? (
              <>
                <CircleValidation />
                <div className="text-base font-bold text-white">
                  Verificando Dados...
                </div>
              </>
            ) : (
              <div className="text-base font-bold text-white">Entrar</div>
            )}
          </div>
        </div>
      </div>
      <div className="relative hidden md:block md:w-1/2">
        <Image src={img} alt="img" layout="fill" objectFit="cover" />
      </div>
      {alerta && (
        <Toast
          tipo={alerta.tipo}
          mensagem={alerta.mensagem}
          onClose={fecharAlerta}
        />
      )}
    </div>
  )
}
function setCookie(arg0: null, arg1: string, token: any, arg3: {
  maxAge: number // Set the expiry in seconds
  path: string
}) {
  throw new Error('Function not implemented.')
}

