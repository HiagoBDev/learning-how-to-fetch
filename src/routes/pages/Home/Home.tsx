import { Search } from "../../../components/Search/Search"
import { useState } from "react"
import { UserProps } from "../../../types/user"
import { User } from "../../../components/User/User"
import { Error } from "../../../components/Error/Error"

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadUser = async (userName: string) => {
    setError(false)
    setUser(null)
    setLoading(true)

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`)

      if (res.status === 404) {
        setError(true)
        setLoading(false)
        return
      }

      const data = await res.json()

      const { avatar_url, login, location, followers, following, bio } = data

      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
        bio,
      }

      setUser(userData)
      setLoading(false)
    } catch (error) {
      console.error("Ocorreu um erro ao carregar o usuário:", error)
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {loading  && (
        <div className=" m-auto mt-10 animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4"></div>
      )}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}
