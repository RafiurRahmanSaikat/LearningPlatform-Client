import { useState } from 'react'
import { Switch } from '@headlessui/react'
const Theme = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className="">


            <Switch.Group>
                <div className="flex-col items-center">
                    <Switch.Label className="text-xs text-white bg-orange-600 p-2 rounded-full mr-4">Dark/Light</Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-gray-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
            {/* <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch> */}
        </div>
    );
};

export default Theme;