<script lang="ts">
	import ChartBox from '$lib/ChartBox.svelte';

  const pieChartOptions = {
    series: [45, 25, 30],
    chart: { type: 'pie', height: 350 },
    labels: ['Basketball', 'Track and Field', 'Book'],
    legend: { position: 'bottom' }
  };

  const barChartOptions = {
    series: [{
      name: 'Revenue',
      data: [3000, 4000, 3500, 5000, 4200]
    }],
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }
  };

  const lineChartOptions = {
    series: [{
      name: 'Visitors',
      data: [120, 190, 300, 250, 220]
    }],
    chart: { type: 'line', height: 350 },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
  };
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-gray-800 dark:text-white">
    <h2 class="text-2xl font-bold mb-4">Club Admin Dashboard</h2>
    <p>Welcome to the club administration panel. Use the sidebar to navigate.</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-2 py-2">
	<ChartBox title="Popular Clubs" options={pieChartOptions} />
  	<ChartBox title="Total Member" options={lineChartOptions} />
  	<ChartBox title="New Club Every Year" options={barChartOptions} />
</div>