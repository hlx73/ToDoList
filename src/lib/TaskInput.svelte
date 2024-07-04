
<script lang="ts">
    import dayjs from "dayjs";
    import { tasks } from "./stores/tasks";

  let title = "";
  function AddTask() {
    tasks.update((currentTask) => {
      currentTask.push({
        title,
        date: dayjs().format(),
        isDone: false,
      });
      return currentTask;
    });
  }
</script>

<div class="input-group input-group-divider flex justify-between rounded-full">
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="Task title..."
  />
  <button on:click={AddTask} class="bg-slate-300">Submit</button>
</div>
