<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <NuxtLayout name="app-layout">
      <div
        class="flex-grow flex items-center justify-center py-12 sm:px-6 lg:px-8"
      >
        <div class="w-full max-w-md space-y-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10">
              <div class="pb-8">
                <h2
                  class="text-center text-3xl font-bold tracking-tight text-gray-900"
                >
                  Sign in
                </h2>
              </div>
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required="true"
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required="true"
                      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-cyan-600 hover:text-cyan-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.classList.add("h-full", "bg-gray-50");
    document.body.classList.add("h-full");
  },
  beforeUnmount() {
    document.documentElement.classList.remove("h-full", "bg-gray-50");
    document.body.classList.remove("h-full");
  },
};
</script>
