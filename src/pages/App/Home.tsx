import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import Header from "@/src/components/Header/Header";
import Input from "@/src/components/Input";
import IconSearch from "@/src/components/Icons/IconSearch";
import Category from "@/src/components/Category";
import IconStethoscope from "@/src/components/Icons/IconStethoscope";
import IconHospital from "@/src/components/Icons/IconHospital";
import { RootStackParamList } from "@/src/navigation/Screens";
import { StackNavigationProp } from "@react-navigation/stack";
import StorageUtils from "@/src/utils/StorageUtils";
import {
  handleSetClinics,
  handleSetDoctorNearby,
  handleSetDoctors,
  handleSetSpecialtys,
} from "@/src/store/root/actions";
import {
  IClinic,
  IDoctor,
  IDoctorNearby,
  ISpecialtys,
} from "@/src/store/root/interfaces";
import DoctorCard from "@/src/components/DoctorCard";
import MenuGroup from "@/src/components/Menu/MenuGroup";

const windowHeight = Dimensions.get("window").height;
const navbarHeight = windowHeight - (windowHeight + Constants.statusBarHeight);

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const rootStore = useAppSelector((store) => store.root);

  useEffect(() => {
    handleLoadFakeData();
  }, []);

  const handleLoadFakeData = () => {
    const doctorsNearby: IDoctorNearby[] = [
      {
        id: 0,
        doctor: {
          name: "Dr. João da Silva",
          role: "Cardiologista",
        },
        distance: 1.2,
        imageUrl: "doctor.png",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 1,
        doctor: {
          name: "Dr. Pedro Santos",
          role: "Ortopedista",
        },
        distance: 1.4,
        imageUrl: "doctor.png",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 2,
        doctor: {
          name: "Dra. Ana Costa",
          role: "Pediatra",
        },
        distance: 2.3,
        imageUrl: "doctor.png",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 3,
        doctor: {
          name: "Dr. Lucas Ferreira",
          role: "Oftalmologista",
        },
        distance: 3.0,
        imageUrl: "doctor.png",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
      {
        id: 4,
        doctor: {
          name: "Dr. Marcelo Sousa",
          role: "Psiquiatra",
        },
        distance: 4.7,
        imageUrl: "doctor.png",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
      },
    ];
    const doctors: IDoctor[] = [
      {
        id: 0,
        doctor: { name: "Dr. João da Silva", role: "Cardiologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 1,
        doctor: { name: "Dra. Maria Oliveira", role: "Dermatologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 2,
        doctor: { name: "Dr. Pedro Santos", role: "Ortopedista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 3,
        doctor: { name: "Dra. Ana Costa", role: "Pediatra" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 4,
        doctor: { name: "Dr. Carlos Lima", role: "Neurologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 5,
        doctor: { name: "Dra. Beatriz Almeida", role: "Endocrinologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 6,
        doctor: { name: "Dr. Lucas Ferreira", role: "Oftalmologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 7,
        doctor: { name: "Dra. Fernanda Rocha", role: "Ginecologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 8,
        doctor: { name: "Dr. Marcelo Sousa", role: "Psiquiatra" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
      {
        id: 9,
        doctor: { name: "Dra. Camila Pereira", role: "Oncologista" },
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        availableDates: [],
        availableHours: [],
        imageUrl: "doctor.png",
      },
    ];
    const clinics: IClinic[] = [
      {
        id: 0,
        name: "Clínica CardioVida",
        specialty: "Clínica especialista em cardiologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [0],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 1,
        name: "Clínica Pele Saudável",
        specialty: "Clínica especialista em Dermatologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [1],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 2,
        name: "Clínica Ortopédica Nova Movimento",
        specialty: "Clínica especialista em Ortopedia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [2],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 3,
        name: "Clínica Infantil Sorriso de Criança",
        specialty: "Clínica especialista em Pediatria",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [3],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 4,
        name: "Clínica NeuroCare",
        specialty: "Clínica especialista em Neurologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [4],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 5,
        name: "Clínica EndocrinoVita",
        specialty: "Clínica especialista em Endocrinologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [5],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 6,
        name: "Clínica Olhos Brilhantes",
        specialty: "Clínica especialista em Oftalmologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [6],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 7,
        name: "Clínica Feminina Saúde da Mulher",
        specialty: "Clínica especialista em Ginecologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [7],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 8,
        name: "Clínica Bem-Estar Mental",
        specialty: "Clínica especialista em Psiquiatria",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [8],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
      {
        id: 9,
        name: "Clínica OncoEsperança",
        specialty: "Clínica especialista em Oncologia",
        openingDate: "Segunda - Quinta",
        openingHour: "13:00 - 19:00",
        doctors: [9],
        imageUrl: "../../assets/images/clinics/clinic.png",
      },
    ];
    const specialtys: ISpecialtys[] = [
      {
        active: true,
        value: "Todos",
      },
      {
        active: false,
        value: "Cardiologista",
      },
      {
        active: false,
        value: "Dermatologista",
      },
      {
        active: false,
        value: "Ortopedista",
      },
      {
        active: false,
        value: "Pediatra",
      },
      {
        active: false,
        value: "Neurologista",
      },
      {
        active: false,
        value: "Endocrinologista",
      },
      {
        active: false,
        value: "Oftalmologista",
      },
      {
        active: false,
        value: "Ginecologista",
      },
      {
        active: false,
        value: "Psiquiatra",
      },
      {
        active: false,
        value: "Oncologista",
      },
    ];
    dispatch(handleSetDoctorNearby(doctorsNearby));
    dispatch(handleSetDoctors(doctors));
    dispatch(handleSetClinics(clinics));
    dispatch(handleSetSpecialtys(specialtys));
  };

  const handleFilterList = () => {
    const filteredRows = rootStore.doctorsNearby.filter((item) =>
      item.doctor.name.toLowerCase().includes(search.toLowerCase())
    );
    return filteredRows;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          gap: 20,
          justifyContent: "space-between",
          padding: 20,
          paddingBottom: 90,
        }}
      >
        <Header logo={true} textLogo={false} perfil={true} userHello={true} />
        <Input
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          placeholder={"Busque médicos ou clínicas"}
          type={"default"}
          multiline={false}
          Icon={() => <IconSearch />}
        />
        {!search && (
          <>
            <View style={styles.categoryContainer}>
              <Category
                size="normal"
                label={"Médicos"}
                onClick={() => navigation.navigate("SchedulingDoctors")}
                Icon={() => (
                  <IconStethoscope width={34} height={34} color={"#fff"} />
                )}
              />
              <Category
                size="normal"
                label={"Clínicas"}
                onClick={() => navigation.navigate("SchedulingDoctors")}
                Icon={() => (
                  <IconHospital width={34} height={34} color={"#fff"} />
                )}
              />
            </View>
            <Text style={styles.subTitle}>Médicos por perto</Text>
          </>
        )}
        <View style={styles.doctorsContainer}>
          {handleFilterList().map((doctor: IDoctorNearby, index: number) => {
            return (
              <DoctorCard
                key={index}
                doctor={doctor}
                distance={true}
                actionButton={false}
              />
            );
          })}
        </View>
      </ScrollView>
      <MenuGroup navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  content: {
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingBottom: navbarHeight + 60,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 20,
  },
  doctorsContainer: {
    gap: 20,
  },
  subTitle: {
    color: "#999",
    fontSize: 18,
    fontFamily: "Outfit-Medium",
  },
});
