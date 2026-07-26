import { useState } from 'react';

import { CheckIcon, classNames, CloseIcon, EditIcon, Input, Select, StatusDot } from '../../../_shared';

import './CharacterCard.scss';

export type CharacterStatus = 'alive' | 'dead' | 'unknown';

export interface Character {
  image: string;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: CharacterStatus;
}

const STATUS_OPTIONS = [
  { label: 'Alive', value: 'alive', decorationSlot: <StatusDot status='alive' /> },
  { label: 'Dead', value: 'dead', decorationSlot: <StatusDot status='dead' /> },
  { label: 'Unknown', value: 'unknown', decorationSlot: <StatusDot status='unknown' /> }
] satisfies { label: string; value: CharacterStatus; decorationSlot: React.ReactNode }[];

type Props = {
  character: Character;
  onSave?: (next: Character) => void;
};

export const CharacterCard = (props: Props) => {
  const { character, onSave } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<Character>(character);

  const startEditing = () => {
    setDraft(character);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const confirmEditing = () => {
    onSave?.(draft);
    setIsEditing(false);
  };

  const updateField = <K extends keyof Character>(key: K, value: Character[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={classNames('character-card', {
        'character-card--editing': isEditing
      })}
    >
      <img
        className='character-card__image'
        src={character.image}
        alt={character.name}
      />

      <div className='character-card__body'>
        <div className='character-card__header'>
          {isEditing ? (
            <div className='character-card__name-field'>
              <Input
                variant='underline'
                label='Name'
                value={draft.name}
                onClear={() => updateField('name', '')}
                onChange={(value) => updateField('name', value)}
              />
            </div>
          ) : (
            <h3 className='character-card__name'>{character.name}</h3>
          )}

          <div className='character-card__actions'>
            {isEditing ? (
              <>
                <button
                  type='button'
                  className={classNames('character-card__action', 'character-card__action--cancel')}
                  aria-label='Cancel'
                  onClick={cancelEditing}
                >
                  <CloseIcon size={10} />
                </button>
                <button
                  type='button'
                  className='character-card__action'
                  aria-label='Save'
                  onClick={confirmEditing}
                >
                  <CheckIcon size={24} />
                </button>
              </>
            ) : (
              <button
                type='button'
                className='character-card__action character-card__action--edit'
                aria-label='Edit'
                onClick={startEditing}
              >
                <EditIcon />
              </button>
            )}
          </div>
        </div>

        <div className='character-card__field'>
          <span className='character-card__label'>Gender</span>
          <span className='character-card__value'>{character.gender}</span>
        </div>

        <div className='character-card__field'>
          <span className='character-card__label'>Species</span>
          <span className='character-card__value'>{character.species}</span>
        </div>

        <div className='character-card__field'>
          <span className='character-card__label'>Location</span>
          {isEditing ? (
            <div className='character-card__control'>
              <Input
                variant='underline'
                label='Location'
                value={draft.location}
                autoWidth
                onClear={() => updateField('location', '')}
                onChange={(value) => updateField('location', value)}
              />
            </div>
          ) : (
            <span className='character-card__value'>{character.location}</span>
          )}
        </div>

        <div className='character-card__field'>
          <span className='character-card__label'>Status</span>
          {isEditing ? (
            <div className='character-card__control'>
              <Select<CharacterStatus>
                size='small'
                value={draft.status}
                onChange={(value) => value && updateField('status', value)}
                options={STATUS_OPTIONS}
              />
            </div>
          ) : (
            <span className='character-card__value character-card__value--status'>
              {character.status.charAt(0).toUpperCase() + character.status.slice(1)}
              <StatusDot status={character.status} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
