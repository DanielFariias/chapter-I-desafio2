import { Button } from "./Button";

import { GenreResponseProps } from "../@types/Genres";

import '../styles/sidebar.scss';

interface Props {
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export const SideBar = ({ genres, handleClickButton, selectedGenreId }: Props) => (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
)