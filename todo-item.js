export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  template: `
    <li
        class="flex gap-2 items-baseline mb-2"
    >
        <input
        type="checkbox"
        :checked="done"
        @change="$emit('done')"
        />
        <span :class="{'line-through': done}">{{ text }}</span>
        <!-- NOTE: inline style added for property margin-inline-start because its not available yet in Tailwind 2   -->
        <button
        class="w-24 btn btn-error"
        style="margin-inline-start: auto"
        @click="$emit('remove', id)"
        >
        Remove
        </button>
    </li>
  `,
};
