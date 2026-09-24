type SignInInput = {
  email: string;
  password: string;
};

type SignUpInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

async function simulateNetwork() {
  await new Promise((resolve) => setTimeout(resolve, 400));
}

export async function signIn({ email, password }: SignInInput) {
  await simulateNetwork();

  if (!email.trim() || !password.trim()) {
    throw new Error("Please enter both your email and password.");
  }

  return { status: "ready_for_backend" as const };
}

export async function signUp({
  name,
  email,
  password,
  confirmPassword,
}: SignUpInput) {
  await simulateNetwork();

  if (!name.trim() || !email.trim() || !password.trim()) {
    throw new Error("Please complete all fields before creating your account.");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords need to match before continuing.");
  }

  if (password.length < 8) {
    throw new Error("Use at least 8 characters so your password is easier to protect.");
  }

  return { status: "ready_for_backend" as const };
}

export async function signOut() {
  await simulateNetwork();
  return { status: "ready_for_backend" as const };
}
