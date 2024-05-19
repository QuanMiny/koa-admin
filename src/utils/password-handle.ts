import bcrypt from 'bcrypt'

const PasswordToHash = (password: string) => {
  const saltRounds = 10
  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  return hashedPassword
}

export default PasswordToHash
