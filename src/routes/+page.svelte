<script lang="ts">
    let { data } = $props();
    let showSecret = $state(false);
</script>

<svelte:head>
    <title>The Cheese Vault</title>
    <meta
        name="description"
        content="Classified dairy intelligence. Handle with care."
    />
</svelte:head>

<div
    class="min-h-screen flex flex-col items-center justify-start pt-[20vh] px-4"
>
    <h1 class="text-3xl font-bold text-center text-yellow-800 mb-8">
        The Cheese Vault 🧀🧀🧀🧀🧀
    </h1>

    <div
        class="w-full max-w-2xl p-10 bg-yellow-50 border-2 border-dashed border-yellow-500 rounded-2xl text-center"
    >
        <p class="text-sm italic text-yellow-700 mb-6">
            Classified dairy intelligence. Handle with care.
        </p>

        <div class="flex flex-col gap-4">
            <div
                class="flex flex-col items-start bg-yellow-100 border border-yellow-300 rounded-lg p-3"
            >
                <span
                    class="text-xs font-semibold uppercase tracking-wide text-yellow-700 mb-1"
                >
                    Public Cheese
                </span>
                <span class="text-lg font-bold text-yellow-900">
                    {data.publicCheese}
                </span>
            </div>

            <div
                class="flex flex-col items-start bg-yellow-100 border border-yellow-300 rounded-lg p-3"
            >
                <span
                    class="text-xs font-semibold uppercase tracking-wide text-yellow-700 mb-1"
                    >Secret Cheese</span
                >
                <div class="flex items-center gap-3 w-full min-h-8">
                    <span
                        class="text-lg font-bold text-yellow-900 font-mono min-w-[6ch] whitespace-nowrap"
                    >
                        {showSecret
                            ? data.secretCheese
                            : "•".repeat(data.secretCheese.length)}
                    </span>
                    <button
                        class="ml-auto px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-lg cursor-pointer transition-colors whitespace-nowrap"
                        onclick={() => (showSecret = !showSecret)}
                    >
                        {showSecret ? "🙈 Hide Secret" : "👁️ Show Secret"}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
