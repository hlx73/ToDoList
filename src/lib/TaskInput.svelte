
<script lang="ts">
    import dayjs from "dayjs";
    import { tasks } from "./stores/tasks";

  let title = "";
  let dateTime=dayjs().format('YYYY-MM-DDTHH:mm');
  function AddTask() {
    tasks.update((currentTask) => {
      currentTask.push({
        title,
        date: dateTime,
        isDone: false,
      });
      return currentTask.sort((a:Task,b:Task)=>{
       return dayjs(a.date).unix() - dayjs(b.date).unix();
      });
    });
  }
</script>

<form class="input-group input-group-divider flex flex-col md:flex-row   justify-between  rounded-md ">
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="Task title..."
  />
  <input
bind:value={dateTime} 
  class="input sm:w-fit"
   title="Input (datetime-local)" 
  type="datetime-local" />
  <button type="submit" on:click={AddTask} class="bg-slate-300 p-2 {title.trim().length==0 && 'bg-black cd'}}" 
  disabled={title.trim().length==0}>
    <span class=" mx-auto ">
      Submit
    </span>
  </button>
</form>
