import 'dotenv/config'
import { execSync } from 'child_process'

const projectId = process.env.VITE_PROJECT_ID
if (!projectId) {
  console.error('Error: VITE_PROJECT_ID is not set in .env')
  process.exit(1)
}

execSync(`npx supabase link --project-ref ${projectId}`, { stdio: 'inherit' })
