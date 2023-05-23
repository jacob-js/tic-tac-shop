import { Badge } from 'antd';
import { CiBellOn } from 'react-icons/ci'
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="flex justify-between px-4 py-5">
        <div className="font-bold text-green-700">Dose-tracker</div>
        <Badge count={2} color='green'>
          <div className="text-xl"><CiBellOn /></div>
        </Badge>
      </div>
      <Outlet />
    </div>
  )
}

export default Header