'use client'
import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'

// import * as todosApi from '@/todos/helpers/todos'
import { useRouter } from 'next/navigation'
import { toogleTodo } from '../actions/todo-actions'

interface TodosGridProps {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter()

  // const toogleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo(id, complete)
  //   console.log({ updatedTodo })

  //   router.refresh()
  // }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {todos.map((todo) => (
        <TodoItem toogleTodo={toogleTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
