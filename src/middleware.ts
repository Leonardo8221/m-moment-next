import { cookies } from 'next/headers'
export function middleware(){
    const allCookies = cookies().getAll()
    console.log('im the cookies',allCookies)

}

export const config={
    matcher:['/',]
}