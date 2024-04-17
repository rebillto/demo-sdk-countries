import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { countries } from "../modules/app.helper";

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(" ");
}

type SelectCountryProps = {
  selected: {
    id: number;
    name: string;
    countryFlag: string;
    currency: string;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      countryFlag: string;
      currency: string;
    }>
  >;
};

export default function SelectCountry({
  selected,
  setSelected,
}: SelectCountryProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="bg-slate-200 h-auto text-slate-500  flex justify-start items-center gap-4 w-full">
          <Listbox.Label className="block text-sm font-medium leading-6 ">
            Customer location
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-[10rem] flex  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex w-full justify-start gap-3 items-center">
                <span>{selected.countryFlag}</span>
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {countries.map((country) => (
                  <Listbox.Option
                    key={country.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span className="h-5 w-5 flex-shrink-0 rounded-full">
                            {country.countryFlag}
                          </span>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {country.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
