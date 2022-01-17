import CodeIcon from "@mui/icons-material/Code";
import DoneIcon from "@mui/icons-material/Done";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "App.scss";
import {Course} from "models/CourseModel";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "store";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

interface DrawerMenuProps {}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({}) => {
  const { courses } = useSelector((state: RootState) => state.courses);
  const { user } = useSelector((state: RootState) => state.auth);
  const [visible, setVisible] = useState(false);
  const [doneCourses, setDoneCourses] = useState<Course[]>();
  const [unavailableCourses, setUnavailableCourses] = useState<Course[]>();
  const [unlockedCourse, setUnlockedCourse] = useState<Course>();

  const toggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    splitCourses();
  }, [courses]);

  const splitCourses = () => {
    const userCourseNumber = user ? user.coursesDone : 0;
    if (courses) {
      setDoneCourses(
        courses.filter((course) => course.courseNumber <= userCourseNumber)
      );
      setUnavailableCourses(
        courses.filter((course) => course.courseNumber > userCourseNumber + 1)
      );
      setUnlockedCourse(
        courses.find((course) => course.courseNumber === userCourseNumber + 1)
      );
    }
  };

  const list = () => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      onClick={toggle}
      onKeyDown={toggle}
    >
      <List>
        <div>
          <Link to="/intro">
            <ListItem button>
              <MenuBookIcon className="course course-start" fontSize="large" />
              <ListItemText primary="Wstęp" />
            </ListItem>
          </Link>
          {doneCourses?.map((course: Course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <ListItem button>
                <DoneIcon className="course course-done" fontSize="large" />
                <ListItemText primary={course.name} />
              </ListItem>
            </Link>
          ))}
        </div>
      </List>
      <Divider />
      <List>
        {unlockedCourse && (
          <Link to={`/course/${unlockedCourse.id}`} key={unlockedCourse.id}>
            <ListItem button>
              <CodeIcon className="course course-unlocked" fontSize="large" />
              <ListItemText primary={unlockedCourse.name} />
            </ListItem>
          </Link>
        )}
      </List>
      <Divider />
      <List>
        {unavailableCourses?.map((course) => (
          <ListItem key={course.id} disabled>
            <DoNotDisturbIcon
              className="course course-unavailable"
              fontSize="large"
            />
            <ListItemText primary={course.name} />
          </ListItem>
        ))}
      </List>
      <Divider />

      <Link to="/projekt">
        <ListItem button>
          <AppRegistrationIcon className="course course-start" fontSize="large" />
          <ListItemText primary="Projekt" />
        </ListItem>
      </Link>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggle} variant="contained" color="primary">
        ZOBACZ KURSY
      </Button>
      <Drawer anchor="left" open={visible} onClose={toggle}>
        {list()}
      </Drawer>
    </div>
  );
};
