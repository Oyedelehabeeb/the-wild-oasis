import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins can't be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  // Ensure the image property exists
  if (!newCabin.image) {
    throw new Error("Cabin image is required");
  }

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Generate image name if the image is a new file
  const imageName = !hasImagePath
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    : "";

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // For creating cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // For editing cabin
  if (id)
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin can't be created or updated");
  }

  // Image Upload
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      // If image upload fails, rollback the cabin creation
      if (!id) await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created"
      );
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
