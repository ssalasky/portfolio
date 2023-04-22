import { Interest } from '../../constants/interests';

const List = ({ item }: { item: Interest }) => {
  return (
    <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {item.name}
        </dd>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {item.description}
        </dd>
      </dl>
    </li>
  );
};

export default List;
