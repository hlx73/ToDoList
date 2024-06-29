<script lang="ts">
import Header from '$lib/header.svelte'
import{name} from "$lib/stores/name.js"
/*et array=[
    'a','b','c'
];
let indix=array.indexOf('b');
array.splice(indix,1)
console.log(array.length);
*/
name.update((name:String)=>{
return name+"1";
});
</script>

<div class="p-16 flex flex-col gap-8">
<Header/>
	

<div class="input-group input-group-divider flex justify-between rounded-full ">
	<input class="flex-1" type="search" placeholder="Task title..." />
    <button class="bg-slate-300">Submit</button>
    </div>	
   
					
</div>

