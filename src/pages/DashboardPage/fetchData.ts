import { faker } from '@faker-js/faker'

export const studentColumns = [
  {
    header: 'Student ID',
    accessorKey: 'studentId'
  },
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: 'Gender',
    accessorKey: 'gender'
  },
  {
    header: 'Major',
    accessorKey: 'major'
  }
]

export type Student = {
  studentId: number
  name: string
  gender: string
  major: string
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newStudent = (): Student => {
  return {
    studentId: faker.number.int(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    major: faker.person.jobTitle()
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Student[] => {
    const len = lens[depth]!
    return range(len).map((): Student => {
      return {
        ...newStudent()
      }
    })
  }

  return makeDataLevel()
}
