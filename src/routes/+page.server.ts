import { env } from '$env/dynamic/private';
const { MY_PUBLIC_CHEESE, MY_SECRET_CHEESE } = env;

export function load() {
  return {
    publicCheese: MY_PUBLIC_CHEESE,
    secretCheese: MY_SECRET_CHEESE
  };
}
