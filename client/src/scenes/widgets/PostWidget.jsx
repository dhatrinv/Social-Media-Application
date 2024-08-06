import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme, Menu, MenuItem } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";


const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  videoPath,
  audioPath,
  userPicturePath,
  likes = {},
  comments = [],
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [anchorEl, setAnchorEl] = useState(null);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setAnchorEl(null);
  };

  const handleShareOptionClick = async (option) => {
    if (option === "Link") {
      try {
        await navigator.clipboard.writeText(`http://localhost:3001/posts/${postId}`);
        alert("Post link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      console.log(`Sharing option selected: ${option}`);
    }
    handleShareClose();
  };

  console.log(`Video URL: http://localhost:3001/assets/${videoPath}`);

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      {videoPath && (
        <video
          width="100%"
          height="800px"
          controls
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${videoPath.replace('public/assets/', '')}`}
        >
          Your browser does not support the video tag.
        </video>
      )}
      {audioPath && (
        <audio
          width="100%"
          height="800px"
          controls
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${audioPath.replace('public/assets/', '')}`}
        >
          Your browser does not support the Audio tag.
        </audio>
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton>
              
            </IconButton>
            
          </FlexBetween>
        </FlexBetween>

        <IconButton onClick={handleShareClick}>
          <ShareOutlined />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleShareClose}
        >
          <MenuItem onClick={() => handleShareOptionClick("Link")}>Share Link</MenuItem>
          <MenuItem onClick={() => handleShareOptionClick("Email")}>Share via Email</MenuItem>
          <MenuItem onClick={() => handleShareOptionClick("Social Media")}>Share on Social Media</MenuItem>
        </Menu>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
