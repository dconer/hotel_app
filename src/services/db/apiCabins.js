import supabase from "../supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("");
    throw new Error("Cabin could not be loaded");
  }

  return cabins;
}
