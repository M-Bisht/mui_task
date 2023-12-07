import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function CheckboxComp() {
  // Hide and show childs
  const [showChild1, setShowChild1] = useState(false);
  const [showChild2, setShowChild2] = useState(false);

  // Parent checkbox
  const [parent1, setParent1] = useState(false);
  const [parent2, setParent2] = useState(false);

  // Child checkbox
  const [childBox1, setChildBox1] = useState({
    child1: false,
    child2: false,
  });
  const [childBox2, setChildBox2] = useState({
    child1: false,
    child2: false,
    child3: false,
  });

  const changeChild1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildBox1({
      ...childBox1,
      [event.target.name]: event.target.checked,
    });
  };

  const changeChild2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildBox2({
      ...childBox2,
      [event.target.name]: event.target.checked,
    });
  };

  const parentHandler1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParent1(event.target.checked);
    setChildBox1((pre) => {
      return {
        ...pre,
        child1: event.target.checked,
        child2: event.target.checked,
      };
    });
  };

  const parentHandler2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParent2(event.target.checked);
    setChildBox2((pre) => {
      return {
        ...pre,
        child1: event.target.checked,
        child2: event.target.checked,
        child3: event.target.checked,
      };
    });
  };

  useEffect(() => {
    const allChilds = Object.values(childBox1);
    setParent1(allChilds.every((child) => child === true));
  }, [childBox1]);

  useEffect(() => {
    const allChilds = Object.values(childBox2);
    setParent2(allChilds.every((child) => child === true));
  }, [childBox2]);

  const parentFunc = (
    setShowChild: Dispatch<SetStateAction<boolean>>,
    showChild: boolean,
    checkbox: boolean,
    onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void,
    label: string
  ) => {
    return (
      <div className="parent">
        <span onClick={() => setShowChild(!showChild)}>
          <ArrowDropDownIcon />
        </span>
        <FormControlLabel
          control={<Checkbox checked={checkbox} onChange={onChangeCheckbox} />}
          label={label}
        />
      </div>
    );
  };

  return (
    <FormGroup className="checkboxContainer">
      <div className="checkboxWrapper">
        {parentFunc(
          setShowChild1,
          showChild1,
          parent1,
          parentHandler1,
          "customer_service"
        )}
        {showChild1 && (
          <div className="child">
            <FormControlLabel
              control={
                <Checkbox
                  checked={childBox1.child1}
                  onChange={changeChild1}
                  name="child1"
                />
              }
              label="support"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={childBox1.child2}
                  onChange={changeChild1}
                  name="child2"
                />
              }
              label="customer_success"
            />
          </div>
        )}
      </div>

      <div className="checkboxWrapper">
        {parentFunc(
          setShowChild2,
          showChild2,
          parent2,
          parentHandler2,
          "design"
        )}
        {showChild2 && (
          <div className="child">
            <FormControlLabel
              control={
                <Checkbox
                  checked={childBox2.child1}
                  onChange={changeChild2}
                  name="child1"
                />
              }
              label="graphic_design"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={childBox2.child2}
                  onChange={changeChild2}
                  name="child2"
                />
              }
              label="product_design"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={childBox2.child3}
                  onChange={changeChild2}
                  name="child3"
                />
              }
              label="web_design"
            />
          </div>
        )}
      </div>
    </FormGroup>
  );
}
