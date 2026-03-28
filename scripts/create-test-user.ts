import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function createTestUser() {
  try {
    console.log('Creating test user...')
    
    const { data, error } = await supabase.auth.admin.createUser({
      email: 'jarokruts@gmail.com',
      password: 'QAZWSX',
      email_confirm: true, // Confirm email automatically
      user_metadata: {
        first_name: 'Jarek',
        last_name: 'Rutkowski',
      },
    })

    if (error) {
      console.error('Error creating user:', error)
      return
    }

    console.log('User created successfully:', data.user?.id)
    console.log('Email:', data.user?.email)
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

createTestUser()
