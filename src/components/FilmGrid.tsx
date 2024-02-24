import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface Rating {
  tconst: string;
  averageRating: number;
}

interface FetchRating {
  results: Rating
}

interface FilmGridProps {
  filmId: string;
}

const FilmGrid = ({filmId}: FilmGridProps) => {
  const [rating, setRating] = useState<Rating | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
    .get<FetchRating>(`/titles/${filmId}/ratings`, {
        signal: controller.signal,
      })
      .then((res) => setRating(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [filmId]);

  if (!rating) return null;

  return (
    <div>
      <p> IMDB Rating: {rating.averageRating}</p>
    </div>
  );
};

export default FilmGrid;
