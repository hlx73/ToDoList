<script>
	import dayjs  from 'dayjs';
import TaskInput from '$lib/TaskInput.svelte';
import Header from '$lib/header.svelte'
</script>

<div class="p-2 pt-8 sm:p-4 md:p-8 xl:p-16  flex flex-col gap-8 max-w-screen-lg mx-auto md:bg h-full w-full]',mjh">
<Header/>
<TaskInput/>

<ol class="gap-2 flex flex-col">
    <li class="bg-[#e9cbfe] p-2 lg:p-4 rounded-lg flex justify-between items-center ">
<div>
                <input class="checkbox rounded-lg border-2 h-8 w-8  " type="checkbox" checked />
                <span class="mr-3 p-2 text-lg">
                workout
                </span>
            </div>
            <div class="flex gap-1 ">
                <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8]">
                        {dayjs()}
                </button>
                <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8] p-2">
                    <svg class="w-4 h-4 rotate-90 "
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
            </button>
        </div>

 </li>
 <li class="bg-[#e9cbfe] p-2 lg:p-4 rounded-lg flex justify-between items-center ">
    <div>
                    <input class="checkbox rounded-lg border-2 h-8 w-8  " type="checkbox" checked />
                    <span class="mr-3 p-2 text-lg">
                    workout
                    </span>
                </div>
                <div class="flex gap-1">
                    <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8]">
                            {dayjs()}
                    </button>
                    <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8] p-2">
                        <svg class="w-4 h-4 rotate-90 "
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
                </button>
            </div>
    
     </li>
     <li class="bg-[#e9cbfe] p-2 lg:p-4 rounded-lg flex justify-between items-center ">
        <div>
                        <input class="checkbox rounded-lg border-2 h-8 w-8  " type="checkbox" checked />
                        <span class="mr-3 p-2 text-lg">
                        workout
                        </span>
                    </div>
                    <div class="flex gap-1">
                        <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8]">
                                {dayjs()}
                        </button>
                        <button class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8] p-2">
                            <svg class="w-4 h-4 rotate-90 "
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
                    </button>
                </div>
        
         </li>
</ol>
</div>

