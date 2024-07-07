<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  import { filter } from "$lib/filter";
  //import 'dayjs/locale/ar'اذا ابغا الكتابة عربي
  //dayjs.locale('de')  use locale globally
  let period = dayjs().format("a") == "pm" ? "evening" : "morning";
  let comboboxValue: string='All tasks';
$: console.log(comboboxValue);

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
</script>
<header class="flex justify-between">
  <div>
    <h1 class="text-2xl mb-2">
      Good {period} 👋
    </h1>
    <h2 class="text-gray-500 text-">
      {dayjs().format("dddd D MMM YYYY")}
    </h2>
  </div>
 
<button class="btn variant-filled h-fit w-fit py-4 justify-between bg-[#c282f0] rounded-full" use:popup={popupCombobox}>
	<span class="" >{$filter }</span>
	<span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="currentColor"><path d="M14 8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9.75c0 .138.112.25.25.25h3.063c.9 0 1.342 1.096.693 1.72l-5.313 5.113a1 1 0 0 1-1.386 0L9.994 19.72c-.649-.625-.207-1.721.693-1.721h3.063a.25.25 0 0 0 .25-.25z"/><path d="M6 1a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zM3 6a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/></g></svg></span>
</button>

<div class="card w-48 shadow-xl py-2  bg-white" data-popup="popupCombobox">
	<ListBox rounded="rounded-none" active="bg-[#b339e8]">
		<ListBoxItem bind:group={$filter} name="medium" value="All Tasks">All tasks</ListBoxItem>
		<ListBoxItem bind:group={$filter} name="medium" value="Today's Tasks">Today's tasks</ListBoxItem>
  </ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					
</header>
