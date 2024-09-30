import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useLocalStorage } from "react-use";
import styled from "styled-components";
import Swal from "sweetalert2";

function CflQuarterForm({ empId, quarter }) {
  const StyledMultiselect = styled(Multiselect)`
    background-color: white;
  `;

  console.log(quarter, "quarter");
  console.log(empId, "empIdfffffffffffffffff");
  const [localThirtyGoalSetting, setThirtyLocalGoalSetting, remove1] =
    useLocalStorage("thirtyDaysgoalsetting", "false");
  const [localSixtyGoalSetting, setSixtyLocalGoalSetting, remove2] =
    useLocalStorage("sixtyDaysgoalsetting", "false");
  const [localNinetyGoalSetting, setNinetyLocalGoalSetting, remove3] =
    useLocalStorage("ninetyDayssetting", "false");
  const [localAllGoalSetting, setAllLocalGoalSetting, remove4] =
    useLocalStorage("skillsgoalsetting", "false");
  const [localGoalSetting, setLocalGoalSetting, remove5] = useLocalStorage(
    "localgoalsetting",
    "false"
  );

  useEffect(() => {
    setLocalGoalSetting(quarter);
  }, []);

  console.warn("pppppppppppppppppppppppppppppppppppppp");

  // useEffect(() => {
  //   if (quarter) {
  //     axios
  //       .get(
  //         `http://localhost:8080/Goals/thirty-days-goals/emp/${empId}/${quarter}`
  //       )
  //       .then((res) => console.log(res.data, "[[[[["));
  //   }
  // }, [empId, quarter]);

  useEffect(() => {
    if (quarter) {
      axios
        .get(
          `http://localhost:8080/Goals/thirty-days-goals/emp/${empId}/${quarter}`
        )
        .then((res) => {
          console.log(res?.data[0].quarter, "????????????");
          console.log(quarter, "quarter");
          if (res?.data[0].quarter != quarter) {
            setThirtyLocalGoalSetting("false");
            setSixtyLocalGoalSetting("false");
            setNinetyLocalGoalSetting("false");
            // setAllLocalGoalSetting(quarter);
            setAllLocalGoalSetting("true");
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Fill Your Goal Setting",
          });
        });
    }
  }, [quarter]);

  console.log(empId, "under empId");
  const date = new Date();
  console.log(date, "date");
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value, "Tab value");

  const [fieldChange, setFieldChange] = useState("");

  const [secondarySkills, setSecondarySkills] = useState({
    skill1: { skill: "", level: "L0" },
  });

  const handleAddSecondarySkillRow2 = () => {
    const nextSkillIndex = Object.keys(secondarySkills).length + 1;
    const newSkillKey = `skill${nextSkillIndex}`;

    // Add new skill with an empty skill name and default dropdown level
    setSecondarySkills({
      ...secondarySkills,
      [newSkillKey]: { skill: "", level: "L0" },
    });
  };

  const handleRemoveSecondarySkillRow2 = (key) => {
    const updatedSkills = { ...secondarySkills };
    delete updatedSkills[key];
    setSecondarySkills(updatedSkills);
  };

  const handleInputSecondarySkillChange2 = (key, event) => {
    const { value } = event.target;

    setSecondarySkills({
      ...secondarySkills,
      [key]: { ...secondarySkills[key], skill: value },
    });
  };

  const handleDropdownChange2 = (key, event) => {
    const { value } = event.target;

    setSecondarySkills({
      ...secondarySkills,
      [key]: { ...secondarySkills[key], level: value },
    });
  };

  console.log(secondarySkills, "secondarySkills");

  useEffect(() => {
    if (secondarySkills) {
      setFieldChange((prevData) => ({
        ...prevData,
        secondarySkills: Object.values(secondarySkills)
          .map(({ skill, level }) => `${skill},${level},${" "}`)
          .join(","),
      }));
    }
  }, [secondarySkills]);

  // other skills

  const [otherSkills, setOtherSkills] = useState({
    skill1: { skill: "", level: "L0" },
  });

  const handleAddOtherSkillRow3 = () => {
    const nextSkillIndex = Object.keys(otherSkills).length + 1;
    const newSkillKey = `skill${nextSkillIndex}`;

    // Add new skill with an empty skill name and default dropdown level
    setOtherSkills({
      ...otherSkills,
      [newSkillKey]: { skill: "", level: "L0" },
    });
  };

  const handleRemoveOtherSkillRow3 = (key) => {
    const updatedSkills = { ...otherSkills };
    delete updatedSkills[key];
    setOtherSkills(updatedSkills);
  };

  const handleInputOtherSkillChange3 = (key, event) => {
    const { value } = event.target;

    setOtherSkills({
      ...otherSkills,
      [key]: { ...otherSkills[key], skill: value },
    });
  };

  const handleDropdownChange3 = (key, event) => {
    const { value } = event.target;

    setOtherSkills({
      ...otherSkills,
      [key]: { ...otherSkills[key], level: value },
    });
  };

  console.log(otherSkills, "otherSkills");

  useEffect(() => {
    if (otherSkills) {
      setFieldChange((prevData) => ({
        ...prevData,
        otherSkills: Object.values(otherSkills)
          .map(({ skill, level }) => `${skill},${level},${" "}`)
          .join(","),
      }));
    }
  }, [otherSkills]);

  console.log(fieldChange, "fieldChange");

  const [allSkillsButton, setAllSkillsButton] = useState(false);

  const [netResult, setNetResult] = useState("");
  useEffect(() => {
    if (netResult) {
      console.log(netResult, "netResult");
      axios
        .post("http://localhost:8080/cflSkill/create", netResult)
        .then((res) => {
          console.log("successfully submitted result");
          setAllSkillsButton(true);
          Swal.fire({
            title: "Sucessfully Submitted",
            text: "All Skills Submitted Successfully",
            icon: "success",
          });
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [netResult]);

  const handleQuarterSubmit = () => {
    setNetResult({ ...fieldChange, empId: empId });
  };

  // 30 days

  const [thirtyDaysGoals, setThirtyDaysGoals] = useState([
    { goal: "", deliverable: "", weightage: "", status: "pending" },
  ]);

  console.log(thirtyDaysGoals, "thirtyDaysGoals");

  const handleAddRow30 = () => {
    setThirtyDaysGoals([
      ...thirtyDaysGoals,
      { goal: "", deliverable: "", weightage: "", status: "pending" },
    ]);
  };

  const handleInputChange30 = (index, field, event) => {
    const { value } = event.target;
    const updatedGoals = thirtyDaysGoals.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setThirtyDaysGoals(updatedGoals);
  };

  // 60 days

  const [sixtyDaysGoals, setSixtyDaysGoals] = useState([
    { goal: "", deliverable: "", weightage: "", status: "pending" },
  ]);

  console.log(sixtyDaysGoals, "sixtyDaysGoals");

  const handleAddRow60 = () => {
    setSixtyDaysGoals([
      ...sixtyDaysGoals,
      { goal: "", deliverable: "", weightage: "", status: "pending" },
    ]);
  };

  const handleInputChange60 = (index, field, event) => {
    const { value } = event.target;
    const updatedGoals = sixtyDaysGoals.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setSixtyDaysGoals(updatedGoals);
  };

  // 90 days
  const [ninetyDaysGoals, setNinetyDaysGoals] = useState([
    { goal: "", deliverable: "", weightage: "", status: "pending" },
  ]);

  console.log(ninetyDaysGoals, "ninetyDaysGoals");

  const handleAddRow90 = () => {
    setNinetyDaysGoals([
      ...ninetyDaysGoals,
      { goal: "", deliverable: "", weightage: "", status: "pending" },
    ]);
  };

  const handleInputChange90 = (index, field, event) => {
    const { value } = event.target;
    const updatedGoals = ninetyDaysGoals.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setNinetyDaysGoals(updatedGoals);
  };

  const [thirtyDayGoalsButton, setThirtyDayGoalsButton] = useState(false);
  const [sixtyDayGoalsButton, setSixtyDayGoalsButton] = useState(false);
  const [ninetyDayGoalsButton, setNinetyDayGoalsButton] = useState(false);
  const handleThirtyDaysGoalsSubmit = () => {
    axios
      .post(
        `http://localhost:8080/Goals/thirty-days-goals/emp/${empId}`,
        thirtyDaysGoals
      )
      .then((res) => {
        console.log("successfully submitted");
        setThirtyDayGoalsButton(true);
        Swal.fire({
          title: "Sucessfully Submitted",
          text: "Thirty Days Goals Submitted Successfully",
          icon: "success",
        });
      });
  };

  const handleSixtyDaysGoalsSubmit = () => {
    axios
      .post(
        `http://localhost:8080/Goals/sixty-days-goals/emp/${empId}`,
        sixtyDaysGoals
      )
      .then((res) => {
        console.log("successfully submitted");
        setSixtyDayGoalsButton(true);
        Swal.fire({
          title: "Sucessfully Submitted",
          text: "Sixty Days Goals Submitted Successfully",
          icon: "success",
        });
      });
  };

  const handleNinetyDaysGoalsSubmit = () => {
    axios
      .post(
        `http://localhost:8080/Goals/ninety-days-goals/emp/${empId}`,
        ninetyDaysGoals
      )
      .then((res) => {
        console.log("successfully submitted");
        setNinetyDayGoalsButton(true);
        Swal.fire({
          title: "Sucessfully Submitted",
          text: "Ninety Days Goals Submitted Successfully",
          icon: "success",
        });
      });
  };
  const [options1] = useState([
    { name: "Html-Css-JS", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "React", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Angular", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue1, setSelectedValue1] = useState([]);

  const formattedOptions1 = options1.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect1 = (selectedList, selectedItem) => {
    setSelectedValue1(selectedList);
  };

  const onRemove1 = (selectedList, removedItem) => {
    setSelectedValue1(selectedList);
  };

  console.log(selectedValue1, "console.log(selectedValue);.....");

  // Function to format selected values into a comma-separated string
  const formatSelectedValues = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  // Display formatted selected values
  console.log(
    "Formatted Values for Options 1:",
    formatSelectedValues(selectedValue1)
  );

  let primarySkillsList = [];
  if (formatSelectedValues(selectedValue1)) {
    primarySkillsList.push(formatSelectedValues(selectedValue1));
  }

  console.log(primarySkillsList, "primarySkillsList");

  // backend

  const [options2] = useState([
    { name: "Java", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    {
      name: "SpringBoot & Hibernate",
      id: 2,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    { name: "Microservices", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue2, setSelectedValue2] = useState([]);

  const formattedOptions2 = options2.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect2 = (selectedList, selectedItem) => {
    setSelectedValue2(selectedList);
  };

  const onRemove2 = (selectedList, removedItem) => {
    setSelectedValue2(selectedList);
  };

  console.log(selectedValue2, "console.log(selectedValue);.....");

  const formatSelectedValues2 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue2)) {
    primarySkillsList.push(formatSelectedValues2(selectedValue2));
  }

  console.log(primarySkillsList, "primarySkillsList");

  // database

  const [options3] = useState([
    { name: "MySql", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Postgres", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "MongoDB", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue3, setSelectedValue3] = useState([]);

  const formattedOptions3 = options3.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect3 = (selectedList, selectedItem) => {
    setSelectedValue3(selectedList);
  };

  const onRemove3 = (selectedList, removedItem) => {
    setSelectedValue3(selectedList);
  };

  const formatSelectedValues3 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue3)) {
    primarySkillsList.push(formatSelectedValues3(selectedValue3));
  }

  console.log(selectedValue3, "console.log(selectedValue);.....");

  // python

  // database

  const [options4] = useState([
    { name: "Android", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Flutter", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue4, setSelectedValue4] = useState([]);

  const formattedOptions4 = options4.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect4 = (selectedList, selectedItem) => {
    setSelectedValue4(selectedList);
  };

  const onRemove4 = (selectedList, removedItem) => {
    setSelectedValue4(selectedList);
  };

  const formatSelectedValues4 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue4)) {
    primarySkillsList.push(formatSelectedValues4(selectedValue4));
  }

  console.log(selectedValue4, "console.log(selectedValue);.....");

  // database

  const [options5] = useState([
    { name: "Jenkins", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Docker", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Kubernetes", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue5, setSelectedValue5] = useState([]);

  const formattedOptions5 = options5.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect5 = (selectedList, selectedItem) => {
    setSelectedValue5(selectedList);
  };

  const onRemove5 = (selectedList, removedItem) => {
    setSelectedValue5(selectedList);
  };

  const formatSelectedValues5 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue5)) {
    primarySkillsList.push(formatSelectedValues5(selectedValue5));
  }
  console.log(selectedValue5, "console.log(selectedValue);.....");

  // database

  const [options6] = useState([
    { name: "Html-Css-JS", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "React", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Angular", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue6, setSelectedValue6] = useState([]);

  const formattedOptions6 = options6.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect6 = (selectedList, selectedItem) => {
    setSelectedValue6(selectedList);
  };

  const onRemove6 = (selectedList, removedItem) => {
    setSelectedValue1(selectedList);
  };

  const formatSelectedValues6 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue6)) {
    primarySkillsList.push(formatSelectedValues6(selectedValue6));
  }
  console.log(selectedValue6, "console.log(selectedValue);.....");

  const [options7] = useState([
    { name: "Flask", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Django", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue7, setSelectedValue7] = useState([]);

  const formattedOptions7 = options7.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect7 = (selectedList, selectedItem) => {
    setSelectedValue7(selectedList);
  };

  const onRemove7 = (selectedList, removedItem) => {
    setSelectedValue7(selectedList);
  };

  const formatSelectedValues7 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue7)) {
    primarySkillsList.push(formatSelectedValues7(selectedValue7));
  }

  console.log(selectedValue7, "console.log(selectedValue);.....");

  const [options8] = useState([
    { name: "MySql", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Postgres", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "MongoDB", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue8, setSelectedValue8] = useState([]);

  const formattedOptions8 = options8.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect8 = (selectedList, selectedItem) => {
    setSelectedValue8(selectedList);
  };

  const onRemove8 = (selectedList, removedItem) => {
    setSelectedValue8(selectedList);
  };

  const formatSelectedValues8 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue8)) {
    primarySkillsList.push(formatSelectedValues8(selectedValue8));
  }

  console.log(selectedValue8, "console.log(selectedValue);.....");

  const [options9] = useState([
    { name: "Jenkins", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Docker", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Kubernetes", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue9, setSelectedValue9] = useState([]);

  const formattedOptions9 = options9.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect9 = (selectedList, selectedItem) => {
    setSelectedValue9(selectedList);
  };

  const onRemove9 = (selectedList, removedItem) => {
    setSelectedValue9(selectedList);
  };

  const formatSelectedValues9 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue9)) {
    primarySkillsList.push(formatSelectedValues9(selectedValue9));
  }

  console.log(selectedValue9, "console.log(selectedValue);.....");

  const [options10] = useState([
    { name: "Html-Css-JS", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Jquery", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Ajax", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Cshtml", id: 4, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Angular", id: 5, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue10, setSelectedValue10] = useState([]);

  const formattedOptions10 = options10.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect10 = (selectedList, selectedItem) => {
    setSelectedValue10(selectedList);
  };

  const onRemove10 = (selectedList, removedItem) => {
    setSelectedValue10(selectedList);
  };

  const formatSelectedValues10 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue10)) {
    primarySkillsList.push(formatSelectedValues10(selectedValue10));
  }

  console.log(selectedValue10, "console.log(selectedValue);.....");

  const [options11] = useState([
    { name: ".Net Core & MVC", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Microservice", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue11, setSelectedValue11] = useState([]);

  const formattedOptions11 = options11.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect11 = (selectedList, selectedItem) => {
    setSelectedValue11(selectedList);
  };

  const onRemove11 = (selectedList, removedItem) => {
    setSelectedValue11(selectedList);
  };

  const formatSelectedValues11 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue11)) {
    primarySkillsList.push(formatSelectedValues11(selectedValue11));
  }

  console.log(selectedValue11, "console.log(selectedValue);.....");

  const [options12] = useState([
    { name: "MySql", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Postgres", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "MongoDB", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue12, setSelectedValue12] = useState([]);

  const formattedOptions12 = options12.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect12 = (selectedList, selectedItem) => {
    setSelectedValue12(selectedList);
  };

  const onRemove12 = (selectedList, removedItem) => {
    setSelectedValue12(selectedList);
  };

  const formatSelectedValues12 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue12)) {
    primarySkillsList.push(formatSelectedValues12(selectedValue12));
  }

  console.log(selectedValue12, "console.log(selectedValue);.....");

  const [options13] = useState([
    { name: "Jenkins", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Docker", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Kubernetes", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue13, setSelectedValue13] = useState([]);

  const formattedOptions13 = options13.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect13 = (selectedList, selectedItem) => {
    setSelectedValue13(selectedList);
  };

  const onRemove13 = (selectedList, removedItem) => {
    setSelectedValue13(selectedList);
  };

  const formatSelectedValues13 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue13)) {
    primarySkillsList.push(formatSelectedValues13(selectedValue13));
  }

  console.log(selectedValue13, "console.log(selectedValue);.....");

  const [options14] = useState([
    { name: "Big Data", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Data Science", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Data Analytics", id: 3, levels: ["L0", "L1", "L2", "L3", "L4"] },
  ]);
  const [selectedValue14, setSelectedValue14] = useState([]);

  const formattedOptions14 = options14.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect14 = (selectedList, selectedItem) => {
    setSelectedValue14(selectedList);
  };

  const onRemove14 = (selectedList, removedItem) => {
    setSelectedValue14(selectedList);
  };

  const formatSelectedValues14 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue14)) {
    primarySkillsList.push(formatSelectedValues14(selectedValue14));
  }
  console.log(selectedValue14, "console.log(selectedValue);.....");

  const [options15] = useState([
    {
      name: "Servers Administration",
      id: 1,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    {
      name: "Storage Administration",
      id: 2,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    {
      name: "Network Administration",
      id: 3,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    {
      name: "Hardware Infra support ( Servers / Storage /Network) ",
      id: 4,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    {
      name: "Security ( Network / HW Infra / Application /Data )",
      id: 5,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
  ]);
  const [selectedValue15, setSelectedValue15] = useState([]);

  const formattedOptions15 = options15.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect15 = (selectedList, selectedItem) => {
    setSelectedValue15(selectedList);
  };

  const onRemove15 = (selectedList, removedItem) => {
    setSelectedValue15(selectedList);
  };

  const formatSelectedValues15 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue15)) {
    primarySkillsList.push(formatSelectedValues15(selectedValue15));
  }

  console.log(selectedValue15, "console.log(selectedValue);.....");

  const [options16] = useState([
    { name: "Manual Testing", id: 1, levels: ["L0", "L1", "L2", "L3", "L4"] },
    { name: "Automate Testing", id: 2, levels: ["L0", "L1", "L2", "L3", "L4"] },
    {
      name: "Functional testing",
      id: 3,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
    {
      name: "Non Functional Testing ",
      id: 4,
      levels: ["L0", "L1", "L2", "L3"],
    },
    { name: "Load Testing ", id: 5, levels: ["L0", "L1", "L2", "L3", "L4"] },
    {
      name: "Defect Management",
      id: 6,
      levels: ["L0", "L1", "L2", "L3", "L4"],
    },
  ]);
  const [selectedValue16, setSelectedValue16] = useState([]);

  const formattedOptions16 = options16.flatMap((option) =>
    option.levels.map((level) => ({
      name: `${option.name} - ${level}`,
      id: `${option.id}-${level}`,
    }))
  );

  const onSelect16 = (selectedList, selectedItem) => {
    setSelectedValue16(selectedList);
  };

  const onRemove16 = (selectedList, removedItem) => {
    setSelectedValue16(selectedList);
  };

  const formatSelectedValues16 = (selectedValues) => {
    return selectedValues.map((item) => item.name).join(", ");
  };

  if (formatSelectedValues(selectedValue16)) {
    primarySkillsList.push(formatSelectedValues16(selectedValue16));
  }

  console.log(selectedValue16, "console.log(selectedValue);.....");

  console.log(primarySkillsList?.join(","), "primarySkillsList");

  const allPrimarySkills = primarySkillsList?.join(",") || "";

  useEffect(() => {
    if (allPrimarySkills) {
      setFieldChange((prevData) => ({
        ...prevData,
        primarySkills: allPrimarySkills,
      }));
    }
  }, [allPrimarySkills]);

  console.log(fieldChange, "fieldChange...");

  console.log(localThirtyGoalSetting, "local");

  return (
    <div className="" style={{ width: "100vw" }}>
      <p className="border-[1px] border-gray-300 w-[1270px] ml-8"></p>

      <div className="cfl-info p-10">
        <div className="plan border-[2px] border-gray-300 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Thirty Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div
            className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl "
            style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
          >
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {thirtyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  value={row.goal}
                  onChange={(e) => handleInputChange30(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  onChange={(e) => handleInputChange30(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="number"
                  value={row.weightage}
                  onChange={(e) => handleInputChange30(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                {/* <input
                  type="text"
                  value={row.status}
                  onChange={(e) => handleInputChange30(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                /> */}

                <input
                  type="text"
                  value={row.status}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
            {/* Add Row Button */}
            <button
              onClick={handleAddRow30}
              className="mt-4 p-2 bg-blue-500 text-white rounded outline-none"
            >
              +
            </button>
          </div>

          {localThirtyGoalSetting === "true" ? (
            ""
          ) : (
            <div className="submit mb-5 ml-2">
              <p
                className="bg-green-700 text-white text-center p-2 w-[100px]  mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
                onClick={() => {
                  handleThirtyDaysGoalsSubmit();
                  setThirtyLocalGoalSetting("true");
                }}
              >
                Submit
              </p>
            </div>
          )}

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Sixty Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>

          <div
            className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl"
            style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
          >
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {sixtyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4">
                <input
                  type="text"
                  value={row.goal}
                  onChange={(e) => handleInputChange60(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  onChange={(e) => handleInputChange60(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="number"
                  value={row.weightage}
                  onChange={(e) => handleInputChange60(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.status}
                  // onChange={(e) => handleInputChange60(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
            {/* Add Row Button */}
            <button
              onClick={handleAddRow60}
              className="mt-4 p-2 bg-blue-500 text-white rounded outline-none "
            >
              +
            </button>
          </div>

          {localSixtyGoalSetting === "true" ? (
            ""
          ) : (
            <div className="submit mb-5 ml-2">
              <p
                className="bg-green-700 text-white text-center p-2 w-[100px]  mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
                onClick={() => {
                  handleSixtyDaysGoalsSubmit();
                  setSixtyLocalGoalSetting("true");
                }}
              >
                Submit
              </p>
            </div>
          )}
          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Ninety Days Plan
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div
            className="space-y-4 mt-6 border-[2px] border-gray-300 p-6 rounded-xl"
            style={{ backgroundColor: "rgba(230, 247, 255,1)" }}
          >
            {/* Global Labels */}
            <div className="grid grid-cols-4 gap-4 font-bold ">
              <div>Goal</div>
              <div>Deliverable/Measure of success</div>
              <div>Overall Weightage</div>
              <div>Status</div>
            </div>

            {/* Input Rows */}
            {ninetyDaysGoals.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 ">
                <input
                  type="text"
                  value={row.goal}
                  onChange={(e) => handleInputChange90(index, "goal", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.deliverable}
                  onChange={(e) => handleInputChange90(index, "deliverable", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="number"
                  value={row.weightage}
                  onChange={(e) => handleInputChange90(index, "weightage", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
                <input
                  type="text"
                  value={row.status}
                  // onChange={(e) => handleInputChange90(index, "status", e)}
                  className="col-span-1 p-2 border rounded outline-none border-[2px] border-gray-500 rounded-md tracking-wide w-full"
                />
              </div>
            ))}
            {/* Add Row Button */}
            <button
              onClick={handleAddRow90}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              +
            </button>
          </div>

          {localNinetyGoalSetting === "true" ? (
            ""
          ) : (
            <div className="submit mb-5 ml-2">
              <p
                className="bg-green-700 text-white text-center p-2 w-[100px]  mt-7 rounded-xl hover:bg-blue-700 hover:cursor-pointer"
                onClick={() => {
                  handleNinetyDaysGoalsSubmit();
                  setNinetyLocalGoalSetting("true");
                }}
              >
                Submit
              </p>
            </div>
          )}
        </div>

        <p className="text-2xl font-semibold text-gray-500 mt-6 mb-4">Skills</p>

        <div className="skills border-[2px] border-gray-300 p-6 rounded-xl">
          <p className="text-2xl font-semibold text-gray-500 mt-6">
            PrimarySkills
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div className="PrimarySkills">
            <div className="p-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl">
              <div className="java">
                <p className="text-xl text-gray-600">
                  Software Development (java)
                </p>
                <div
                  className="p-10 font-semibold mt-2 border-[2px] border-gray-300 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <div className="fron-end flex items-center space-x-10">
                        <p>Frontend</p>
                        {/* <Multiselect
                          options={formattedOptions1}
                          selectedValues={selectedValue1}
                          onSelect={onSelect1}
                          onRemove={onRemove1}
                          showCheckbox={true}
                          displayValue="name"
                        /> */}

                        <StyledMultiselect
                          options={formattedOptions1}
                          selectedValues={selectedValue1}
                          onSelect={onSelect1}
                          onRemove={onRemove1}
                          showCheckbox={true}
                          displayValue="name"
                        />
                      </div>
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>Backend</p>
                      <Multiselect
                        options={formattedOptions2}
                        selectedValues={selectedValue2}
                        onSelect={onSelect2}
                        onRemove={onRemove2}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>DataBase</p>
                      <Multiselect
                        options={formattedOptions3}
                        selectedValues={selectedValue3}
                        onSelect={onSelect3}
                        onRemove={onRemove3}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-[57px] mt-5">
                      <p>Mobile</p>
                      <Multiselect
                        options={formattedOptions4}
                        selectedValues={selectedValue4}
                        onSelect={onSelect4}
                        onRemove={onRemove4}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-[60px] mt-5">
                      <p>CI/CD</p>
                      <Multiselect
                        options={formattedOptions5}
                        selectedValues={selectedValue5}
                        onSelect={onSelect5}
                        onRemove={onRemove5}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="python mt-6">
                <p className="text-xl text-gray-600">
                  Software Development (python)
                </p>
                <div
                  className="p-10 font-semibold mt-2 border-[2px] border-gray-300 p-6 rounded-xl "
                  style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <div className="fron-end flex items-center space-x-10">
                        <p>Frontend</p>
                        <Multiselect
                          options={formattedOptions6}
                          selectedValues={selectedValue6}
                          onSelect={onSelect6}
                          onRemove={onRemove6}
                          showCheckbox={true}
                          displayValue="name"
                        />
                      </div>
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>Backend</p>
                      <Multiselect
                        options={formattedOptions7}
                        selectedValues={selectedValue7}
                        onSelect={onSelect7}
                        onRemove={onRemove7}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>DataBase</p>
                      <Multiselect
                        options={formattedOptions8}
                        selectedValues={selectedValue8}
                        onSelect={onSelect8}
                        onRemove={onRemove8}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-[62px] mt-5">
                      <p>CI/CD</p>
                      <Multiselect
                        options={formattedOptions9}
                        selectedValues={selectedValue9}
                        onSelect={onSelect9}
                        onRemove={onRemove9}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="dot-net mt-6">
                <p className="text-xl text-gray-600">
                  Software Development (dot-net)
                </p>
                <div
                  className="p-10 font-semibold mt-2 border-[2px] border-gray-300 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <div className="fron-end flex items-center space-x-10">
                        <p>Frontend</p>
                        <Multiselect
                          options={formattedOptions10}
                          selectedValues={selectedValue10}
                          onSelect={onSelect10}
                          onRemove={onRemove10}
                          showCheckbox={true}
                          displayValue="name"
                        />
                      </div>
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>Backend</p>
                      <Multiselect
                        options={formattedOptions11}
                        selectedValues={selectedValue11}
                        onSelect={onSelect11}
                        onRemove={onRemove11}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-10">
                      <p>DataBase</p>
                      <Multiselect
                        options={formattedOptions12}
                        selectedValues={selectedValue12}
                        onSelect={onSelect12}
                        onRemove={onRemove12}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-[62px] mt-5">
                      <p>CI/CD</p>
                      <Multiselect
                        options={formattedOptions13}
                        selectedValues={selectedValue13}
                        onSelect={onSelect13}
                        onRemove={onRemove13}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="digital mt-6">
                <p className="text-xl text-gray-600">Other</p>
                <div
                  className="p-10 font-semibold mt-2 border-[2px] border-gray-300 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <div className="fron-end flex items-center space-x-10">
                        <p>Digital</p>
                        <Multiselect
                          options={formattedOptions14}
                          selectedValues={selectedValue14}
                          onSelect={onSelect14}
                          onRemove={onRemove14}
                          showCheckbox={true}
                          displayValue="name"
                        />
                      </div>
                    </div>
                    <div className="fron-end flex items-center space-x-5">
                      <p>IT Infra & Core</p>
                      <Multiselect
                        options={formattedOptions15}
                        selectedValues={selectedValue15}
                        onSelect={onSelect15}
                        onRemove={onRemove15}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                    <div className="fron-end flex items-center space-x-5">
                      <p>Software Testing</p>
                      <Multiselect
                        options={formattedOptions16}
                        selectedValues={selectedValue16}
                        onSelect={onSelect16}
                        onRemove={onRemove16}
                        showCheckbox={true}
                        displayValue="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Secondary Skills
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div className="SecondarySkills">
            <div
              className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl"
              style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
            >
              {Object.keys(secondarySkills).map((key) => (
                <div key={key} className="col-span-1 ml-2">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    {key}
                  </label>

                  <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                    <input
                      type="text"
                      value={secondarySkills[key].skill}
                      onChange={(event) =>
                        handleInputSecondarySkillChange2(key, event)
                      }
                      className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
                    />

                    <select
                      value={secondarySkills[key].level}
                      onChange={(event) => handleDropdownChange2(key, event)}
                      className="outline-none border-[2px] border-gray-500 rounded-md p-2"
                    >
                      <option value="L0">L0</option>
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="L4">L4</option>
                    </select>

                    <FaCircleMinus
                      onClick={() => handleRemoveSecondarySkillRow2(key)}
                      className="text-red-500 text-2xl hover:cursor-pointer"
                    />
                  </div>
                </div>
              ))}

              <FaCirclePlus
                onClick={handleAddSecondarySkillRow2}
                className="text-blue-700 text-2xl hover:cursor-pointer mt-10"
              />
            </div>
          </div>

          <p className="text-2xl font-semibold text-gray-500 mt-6">
            Other Skills
          </p>
          <p className="border-[1px] border-gray-400 mt-2"></p>
          <div className="OtherSkills">
            <div
              className="grid grid-cols-3 gap-10 font-semibold mt-6 border-[2px] border-gray-300 p-6 rounded-xl "
              style={{ backgroundColor: "rgba(230, 247, 255,0.2)" }}
            >
              {Object.keys(otherSkills).map((key) => (
                <div key={key} className="col-span-1 ml-2">
                  <label className="mb-1 font-semibold text-lg text-gray-600">
                    {key}
                  </label>

                  <div className="textFieldAndDelete flex items-center space-x-2 mt-1">
                    <input
                      type="text"
                      value={otherSkills[key].skill}
                      onChange={(event) =>
                        handleInputOtherSkillChange3(key, event)
                      }
                      className="outline-none border-[2px] border-gray-500 rounded-md p-2 tracking-wide w-full"
                    />

                    <select
                      value={otherSkills[key].level}
                      onChange={(event) => handleDropdownChange3(key, event)}
                      className="outline-none border-[2px] border-gray-500 rounded-md p-2"
                    >
                      <option value="L0">L0</option>
                      <option value="L1">L1</option>
                      <option value="L2">L2</option>
                      <option value="L3">L3</option>
                      <option value="L4">L4</option>
                    </select>

                    <FaCircleMinus
                      onClick={() => handleRemoveOtherSkillRow3(key)}
                      className="text-red-500 text-2xl hover:cursor-pointer"
                    />
                  </div>
                </div>
              ))}

              <FaCirclePlus
                onClick={handleAddOtherSkillRow3}
                className="text-blue-700 text-2xl hover:cursor-pointer mt-10"
              />
            </div>
          </div>

          {localAllGoalSetting === "true" ? (
            ""
          ) : (
            <div className="submit mb-5 ">
              <p
                className="bg-green-700 text-white text-center p-2 w-[150px] mt-10 ml-[10px] rounded-xl hover:bg-blue-700 hover:cursor-pointer"
                onClick={() => {
                  handleQuarterSubmit();
                  setAllLocalGoalSetting("true");
                }}
              >
                Submit Skills
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CflQuarterForm;
