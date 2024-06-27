<script lang="ts">
import dayjs from 'dayjs'
//import 'dayjs/locale/ar'اذا ابغا الكتابة عربي
//dayjs.locale('de')  use locale globally
let period=dayjs().format('a')=='pm'?'evening':'morning';
</script>
<div class="p-12">
	<header class="flex justify-between">
		<div>
		<h1 class="text-2xl mb-2">	
			
			Good {period} 👋
		</h1>
		<h2 class="text-[#707178] text-">
			{dayjs().format('dddd D MMM YYYY' )}

		</h2>	
	</div>
	<div class="bg-red-500 h-16 w-32">

	</div>
	</header>
</div>
