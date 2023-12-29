'use client'
import { api } from "@/lib/api"
import { useEffect } from "react"

export default function Logado() {

    async function logar() {
        const response = await api.post('/teste')
        console.log(response.data)
    }

    useEffect(() => {
        logar()
      }, [])
    return (
        <><h1>Logado com sucesso</h1><p>hhhh</p></>
    )
}