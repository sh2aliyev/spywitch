import { useItemsStore } from '@/system/store';
import StatusInfo from './status-info';
import { FieldName } from '@/system/types';

interface DataItemProps {
  name: FieldName;
}

function DataItem({ name }: DataItemProps) {
  const data = useItemsStore((state) => state[name]);

  return <StatusInfo label={name} data={data.length} />;
}

export default DataItem;
