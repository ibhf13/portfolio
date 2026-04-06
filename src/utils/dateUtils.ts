export const calculateAge = (birthdate: Date): number => {
  if (Number.isNaN(birthdate.getTime())) {
    throw new Error('calculateAge: invalid Date')
  }

  const today = new Date()

  if (birthdate.getTime() > today.getTime()) {
    return 0
  }

  let age = today.getFullYear() - birthdate.getFullYear()
  const monthDiff = today.getMonth() - birthdate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--
  }

  return age
}
