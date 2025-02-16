// 'use client'
export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from '@/app/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos/components'
import { useEffect } from 'react'

export const metadata = {
  title: 'Listado de Todos',
  description: 'Listado de Todos',
}

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then((res) => res.json())
  //     .then(console.log)
  // }, [])

  return (
    <div>
      <div className='w-full p-3 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
