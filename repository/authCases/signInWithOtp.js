const signInWithOtp = async (supabase, email, emailRedirectTo) =>{
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo}});
    if(error){throw error;}
}
export default signInWithOtp;
