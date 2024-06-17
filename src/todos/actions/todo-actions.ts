'use server'

import prisma from '@/app/lib/prisma'
import { Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { resolve } from 'path'

export const sleep = async (seconds: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export const toogleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(3)

  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw `Todo con id ${id} no encontrado`
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  })

  revalidatePath('/dashboard/server-todos')

  return updatedTodo
}

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } })
    revalidatePath('/dashboard/server-todos')
    return todo
  } catch (error) {
    return { message: 'Error creando todo' }
  }
}

export const deleteCompleted = async (): Promise<{
  message: string
}> => {
  try {
    await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    })
    revalidatePath('/dashboard/server-todos')
    return { message: 'Todos eliminados con éxito' }
  } catch (error) {
    return { message: 'Error eliminando todos' }
  }
}
