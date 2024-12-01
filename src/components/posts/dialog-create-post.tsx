import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Textarea } from '../ui/textarea'

export function DialogCreatePost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Criar publicação</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Criar publicação:</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Tipo de publicação:
            </Label>
            <Input id="name" defaultValue="Atividade" className="col-span-3" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="text-left">
              Conteúdo:
            </Label>
            <Textarea
              id="name"
              placeholder="Conteúdo da publicação..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Criar Publicação</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
