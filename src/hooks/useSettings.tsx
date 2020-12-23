import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startSaveNoteTheme, startUpdateNoteTheme, updateNoteTheme } from '../redux/NoteTheme/note.theme.actions';

// import { updateSettings, getSettings, saveSettings } from '../store/actions/settings.action';
// import { UpdateSettingsPayload } from '../store/actions/settings.action';



function useSettings() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { settings, loading } = useSelector((state: any) => state.noteTheme);

//   const isDisabled = useMemo(() => Object.values(data).some(v => !v), [data]);

  const onSaveSettings = useCallback((withApplyingToAll = false) => {
    dispatch(startSaveNoteTheme(withApplyingToAll));
    history.push('/')
  }, [dispatch, history]);

//   const onUpdateSettings = useCallback((payload: UpdateSettingsPayload) => dispatch(updateSettings(payload)), [dispatch]);

//   const onUpdateSettings = useCallback((payload: UpdateSettingsPayload) => dispatch(updateSettings(payload)), [dispatch]);

const onUpdateTheme = useCallback((withApplyingToAll = false) => {
  dispatch(startUpdateNoteTheme(withApplyingToAll))
  history.push('/')
}, [dispatch, history])

const onUpdateSettings = useCallback((name: string, value: string | number) => {
    console.log("settings: name: ", name, ", value: ", value)
    console.log("settings: ", settings)
    dispatch(updateNoteTheme(name, value))
}, [dispatch] )



//   const onGetSettings = useCallback(() => !isLoading && !isLoaded && dispatch(getSettings()), [dispatch, isLoading, isLoaded]);
    
    return {
        settings,
        loading,
        // isLoading,
        // isLoaded,
        // isDisabled,
        // isSaving,
        // onGetSettings,
        onUpdateTheme,
        onUpdateSettings,
        onSaveSettings
      };
}

export default useSettings;
