<script>
  import dayjs from "dayjs";
  import TaskInput from "$lib/TaskInput.svelte";
  import Header from "$lib/header.svelte";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime"
  dayjs.extend(relativeTime);
  
import { getModalStore } from '@skeletonlabs/skeleton';
			
  const modalStore = getModalStore();
            

</script>

<div
  class="p-2 pt-8 sm:p-4 md:p-8 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto md:bg h-full w-full]',mjh"
>
  <Header />
  <TaskInput />

  <ol class="gap-2 flex flex-col">
    <h3>left tasks:</h3>
    {#each $tasks as task}
    {#if !task.isDone}
      <li
        class="bg-[#e9cbfe] p-2 lg:p-4 rounded-lg flex justify-between items-center"
      >
        <div>
          <input
          bind:checked={task.isDone}
            class="checkbox rounded-lg border-2 h-8 w-8"
            type="checkbox"
           
          />
          <span class="mr-3 p-2 text-lg"> {task.title} </span>
        </div>
        <div class="flex gap-1">
          <button
            class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8]"
          >
            {dayjs().to(dayjs(task.date))}
          </button>
          <button
            class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8] p-2"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z"/></svg>
            
          </button>
       
        </div>
      </li>
      {/if}
    {/each}
  </ol>

<ol class="gap-2 flex flex-col">
  <h3>completed tasks:</h3>
  {#each $tasks as task}
  {#if task.isDone}
    <li
      class="bg-[#e9cbfe] p-2 lg:p-4 rounded-lg flex justify-between items-center"
    >
      <div>
        <input
        bind:checked={task.isDone}
          class="checkbox rounded-lg border-2 h-8 w-8"
          type="checkbox"
         
        />
        <span class="mr-3 p-2 text-lg"> {task.title} </span>
      </div>
      <div class="flex gap-1">
        <button
          class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8]"
        >
          {dayjs().to(dayjs(task.date))}
        </button>
        <button
          class="btn variant-soft-filled-surface bg-white rounded-lg hover:bg-[#b339e8] p-2"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z"/></svg>
          
        </button>
     
      </div>
    </li>
    {/if}
  {/each}
</ol>
</div>

