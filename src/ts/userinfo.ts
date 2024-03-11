import type { APIRoute } from "astro";
// import { supabase } from "../db/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    console.log(formData);
        
    return redirect("/");
    };