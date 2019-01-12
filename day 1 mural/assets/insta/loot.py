from instaLooter import InstaLooter
import re
import os

insgtagram_user = "mrrituparna"
looter = InstaLooter(profile=insgtagram_user)
post_list = []
_baseurl = "https://www.instagram.com/p"

for media in looter.medias(with_pbar=True):
   post_dict = {}
   post_info = looter.get_post_info(media['code'])
   post_dict['photo_url'] = post_info['display_url']
   comment_user = []
   comment_text = []
   for component in post_info['edge_media_to_comment']['edges']:
       comment_user.append(component['node']['owner']['username'])
       comment_text.append(component['node']['text'])
   try:
       caption = post_info['edge_media_to_caption']['edges'][0]['node']['text']
   except :
       caption = []
       post_dict['caption'] = caption
   if caption:
       post_dict['hashtag'] = re.findall(r"#(\w+)", caption)
   else :
       post_dict['hashtag'] = []

   post_dict['caption']=caption
   post_dict['insta_url'] =os.path.join(_baseurl,post_info['shortcode'])
   post_dict['instagram_id'] = post_info['owner']['username']
   post_dict['instagram_alias'] = post_info['owner']['full_name']
   post_list.append(post_dict)
