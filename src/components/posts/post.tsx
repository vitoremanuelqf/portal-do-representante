import { Globe, Heart, Link, MessageSquare, Star, Trash2 } from 'lucide-react'
import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Post() {
  return (
    <Card className="h-auto w-full">
      <CardHeader className="h-auto w-full flex-row items-center justify-between gap-2 space-y-0">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col">
          <CardTitle className="text-base">
            Vítor Emanuel Queiroz Ferreira
          </CardTitle>

          <CardDescription>
            Aluno · 1h · <Globe className="inline size-4 stroke-[1.25]" />
          </CardDescription>
        </div>

        <Button variant="ghost">
          <Trash2 className="inline size-5 stroke-[1.25] text-muted-foreground" />
        </Button>
      </CardHeader>

      <CardContent className="h-auto w-full">
        <p className="whitespace-pre-wrap text-sm">
          Atividade: POO vs Prog. Funcional Backend II | Data de entrega:
          17/09/2024
          <br /> <br />
          Ler o artigo a seguir:
          https://fluxtech.me/blog/object-oriented-programming-vs-functional-programming/
          <br /> <br />
          Questões: <br /> <br />
          1. Comente sobre as vantagens/desvantagens de cada abordagem citada no
          artigo. <br /> <br />
          2. Como você aplica a Programação Orientada a Objeto em seus projetos?
          Se não aplica, explique o motivo. <br /> <br />
          3. Sua atividade anterior (Código Limpo) utilizou recursos de POO? Se
          sim, como? <br /> <br />
          4. Explique os conceitos de Herança, Polimorfismo, Encapsulamento,
          Classes Abstratas e Interfaces. Como você os aplicaria (ou aplicou) em
          seus projetos da disciplina? Obs: O aluno poderá ler outros artigos
          complementares. Neste caso, citar as fontes no documento. Entregar as
          respostas em um arquivo PDF.
        </p>
      </CardContent>

      <CardFooter className="h-auto w-full flex-col items-start gap-4">
        <div className="flex h-auto w-full justify-between">
          <Badge>Atividade</Badge>

          <div className="size-auto">
            <span className="text-xs text-muted-foreground">13 Curtidas</span> ·{' '}
            <span className="text-xs text-muted-foreground">2 Comentários</span>
          </div>
        </div>
        <Separator className="w-full" />
        <div className="flex h-auto w-full gap-4">
          <Button variant="ghost" size="xs">
            <Heart className="mr-1 inline size-5 stroke-[1.25] text-muted-foreground" />
            Gostei
          </Button>

          <Button variant="ghost" size="xs">
            <MessageSquare className="mr-1 inline size-5 stroke-[1.25] text-muted-foreground" />
            Comentar
          </Button>

          <Button variant="ghost" size="xs">
            <Link className="mr-1 inline size-5 stroke-[1.25] text-muted-foreground" />
            Compartilhar
          </Button>

          <Button className="ml-auto" variant="ghost" size="xs">
            <Star className="inline size-5 stroke-[1.25] text-muted-foreground" />
          </Button>
        </div>
        {/* <Separator className="w-full" />
        <CardTitle className="text-base">Comentários:</CardTitle>
        <PostComment />
        <Separator className="w-full" />
        <PostComment /> */}
      </CardFooter>
    </Card>
  )
}
