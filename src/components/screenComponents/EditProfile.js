import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import Ionic from '../../../node_modules/react-native-vector-icons/Ionicons';

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, profileImage } = route.params;
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35, color: 'white' }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>

          <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              opacity: 0.5,
              color: 'white'
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: 'white',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
              color: 'white'
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
              color: 'white',
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Website"
            placeholderTextColor={'white'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',

            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Bio"
            placeholderTextColor={'white'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: '#3493D9',
              borderColor: '#EFEFEF',
            }}>
            Switch to Professional account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: '#3493D9',
              borderColor: '#EFEFEF',
            }}>
            Persnol information setting
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default EditProfile;
