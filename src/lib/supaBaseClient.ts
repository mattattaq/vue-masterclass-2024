import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_API_KEY
// const serviceRoleKey = import.meta.env.VITE_SERVICE_ROLE_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
console.log(supabase)
console.log(supabaseKey)
