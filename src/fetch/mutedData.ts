const supabaseBaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE || "";
const apiKey = import.meta.env.VITE_SUPABASE_API_KEY || "";

export async function mutateData<T>(url:string,method:"POST" | "PUT" | "DELETE" | "GET",body?:object,requiredAuth:boolean = true):Promise<{data?:T;error?:string}>{
    try {
        const token = requiredAuth ? localStorage.getItem('token') : null
        const headers: HeadersInit = {"Content-Type":"application/json" , "apikey":`${apiKey}`}
        if(token) headers["Autorization"] = `Bearer ${token}`
        const response = await fetch(`${supabaseBaseUrl}/${url}`,{method , headers, body: body ? JSON.stringify(body) : undefined})
        if(!response.ok) throw new Error(`Error ${response.status}: ${response.statusText} `)
        const data:T = await response.json()
        return {data}
    } catch (error) {
        return {error: (error as Error).message}
    }
}
  