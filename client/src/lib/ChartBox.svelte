<script>
  import { Chart, Card } from 'flowbite-svelte';

  export let title = 'Chart Title';
  export let options;
</script>

<Card class="w-full h-full">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-lg font-bold text-white py-2 px-2">{title}</h2>
  </div>

  <Chart {options} class="w-full h-64" />
</Card>