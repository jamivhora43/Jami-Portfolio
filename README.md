# Jami Vhora – Video Portfolio (Next.js 14 + Supabase)

Untested scaffold: run `npm install && npm run build` and fix anything it reports before deploying.

## 1. Supabase
1. Create a project at supabase.com.
2. Authentication > Sign In / Providers > Email: turn OFF "Allow new users to sign up".
3. SQL Editor: run `supabase/migrations/001_init.sql` (tables, RLS, `thumbnails` bucket).
4. Authentication > Users > Add user (your email + password, auto confirm).
5. SQL Editor: `insert into public.admins (user_id) select id from auth.users where email = 'YOUR_EMAIL';`
6. Project Settings > API: copy the Project URL and anon key.

## 2. Run locally
```
cp .env.example .env.local   # fill URL and anon key (service-role key is not needed)
npm install
npm run dev                  # http://localhost:3000 and /admin
```

## 3. GitHub
```
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```
(Create the empty repo on github.com first.)

## 4. Vercel
Add New > Project > import the repo > add env vars NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY > Deploy.
Later updates: `git push` redeploys automatically.
